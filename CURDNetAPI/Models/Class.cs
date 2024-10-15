using System;
using System.Collections.Generic;

namespace CURDNetAPI.Models;

public partial class Class
{
    public int Id { get; set; }

    public string Name { get; set; } = null!;

    public int? TeacherId { get; set; }

    public virtual ICollection<Student> Students { get; } = new List<Student>();

    public virtual Teacher? Teacher { get; set; }
}
