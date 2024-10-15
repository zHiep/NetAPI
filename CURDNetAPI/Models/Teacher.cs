using System;
using System.Collections.Generic;

namespace CURDNetAPI.Models;

public partial class Teacher
{
    public int Id { get; set; }

    public string Name { get; set; } = null!;

    public string Email { get; set; } = null!;

    public virtual ICollection<Class> Classes { get; } = new List<Class>();
}
