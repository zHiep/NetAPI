using System;
using System.Collections.Generic;

namespace CURDNetAPI.Models;

public partial class Student
{
    public int Id { get; set; }

    public string Name { get; set; } = null!;

    public string Email { get; set; } = null!;

    public DateTime? Birth { get; set; }

    public int? ClassId { get; set; }

    public virtual Class? Class { get; set; }
}
