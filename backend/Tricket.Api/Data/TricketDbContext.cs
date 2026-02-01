using Microsoft.EntityFrameworkCore;
using Tricket.Api.Models;

namespace Tricket.Api.Data
{
    public class TricketDbContext : DbContext
    {
        public TricketDbContext(DbContextOptions<TricketDbContext> options)
            : base(options)
        {
        }

        public DbSet<Ticket> Tickets => Set<Ticket>();
    }
}