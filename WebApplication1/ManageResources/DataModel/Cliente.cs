using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ManageResources.DataModel
{
    public class Cliente
    {

        public virtual int IdCliente { get; set; }
        public virtual string RazaoSocial { get; set; }
        public virtual string NomeFantasia { get; set; }
        public virtual string CNPJ { get; set; }
        public virtual string Logradouro { get; set; }
        public virtual string Numero { get; set; }
        public virtual string Bairro { get; set; }
        public virtual string Complemento { get; set; }
        public virtual string Municipio { get; set; }
        public virtual string Estado { get; set; }
        public virtual string CEP { get; set; }
        public Cliente()
        {

        }

    }
}
