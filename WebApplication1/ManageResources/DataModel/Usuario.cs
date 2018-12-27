using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ManageResources.DataModel
{
    public class Usuario
    {
        public virtual int IdUser { get; set; }
        public virtual string NomeCompleto { get; set; }
        public virtual string Apelido { get; set; }
        public virtual string  Email { get; set; }
        public virtual string Telefone { get; set; }
        public virtual string Senha { get; set; }
        
        public Usuario()
        {

        }
    }
}
