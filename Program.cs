using System.Net.Mime;
using System.Text;


var builder = WebApplication.CreateBuilder(args);

var app = builder.Build();

app.UseStaticFiles();

app.MapGet("/", () => Results.Extensions.Html(@"
<html lang='en'>

<head>
    <meta charset='UTF-8'>
    <meta name='viewport' content='width=device-width, initial-scale=1.0'>
    <title>Goodluck with the exam!</title>
</head>

<body>
    <div id='root'></div>
    <script src='./js/main.js'></script>
</body>

</html>
"));

dynamic[] people = {
            new Student { Id= Guid.NewGuid(), Name = "Alice", Grade = 9 },
            new Student { Id= Guid.NewGuid(), Name = "Bob", Grade = 10 },
            new Student { Id= Guid.NewGuid(), Name = "Charlie", Grade = 11 },
            new Teacher { Id= Guid.NewGuid(), Name = "Mr. Smith", Subject = "Mathematics" },
            new Teacher { Id= Guid.NewGuid(), Name = "Ms. Green", Subject = "History" },
            new Staff { Id= Guid.NewGuid(), Name = "Mr. Brown", Department = "Maintenance" },
            new Staff { Id= Guid.NewGuid(), Name = "Mrs. White", Department = "Administration" },
            new Teacher { Id= Guid.NewGuid(), Name = "Dr. Adams", Subject = "Physics" },
            new Student { Id= Guid.NewGuid(), Name = "Diana", Grade = 12 },
            new Staff { Id= Guid.NewGuid(), Name = "Ms. Black", Department = "Library" }
};

app.MapGet("/api/persons", (string? role) =>
{
    if (role != null)
    {
        return people.Where(p => p.Role == role);
    }
    return people;
});


app.Run("http://localhost:5000");

public interface IPerson
{
    public Guid Id { get; } //cigdem: added the id here 
    string Name { get; }
    string Role { get; }
   
}

public class Student : IPerson
{
    public Guid Id { get; set;} //cigdem: added the id here 
    public string Name { get; set; }
    public int Grade { get; set; }
    public string Role => "student";
}

public class Teacher : IPerson
{
    public Guid Id { get; set;} //cigdem: added the id here 
    public string Name { get; set; }
    public string Subject { get; set; }
    public string Role => "teacher";
}

public class Staff : IPerson
{
    public Guid Id { get; set;} //cigdem: added the id here 
    public string Name { get; set; }
    public string Department { get; set; }
    public string Role => "staff";
}

static class ResultsExtensions
{
    public static IResult Html(this IResultExtensions resultExtensions, string html)
    {
        ArgumentNullException.ThrowIfNull(resultExtensions);

        return new HtmlResult(html);
    }
}

class HtmlResult : IResult
{
    private readonly string _html;

    public HtmlResult(string html)
    {
        _html = html;
    }

    public Task ExecuteAsync(HttpContext httpContext)
    {
        httpContext.Response.ContentType = MediaTypeNames.Text.Html;
        httpContext.Response.ContentLength = Encoding.UTF8.GetByteCount(_html);
        return httpContext.Response.WriteAsync(_html);
    }
}