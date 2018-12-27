using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using FluentNHibernate.Mapping;

namespace ManageResources.DataModel
{
    public class ClienteMap : ClassMap <Cliente>
    {
        public ClienteMap()
        {
            Table("Cliente");
            Id(x=>x.IdCliente);
            Map(x=>x.RazaoSocial);
            Map(x => x.CNPJ);
            Map(x => x.NomeFantasia);
            Map(x => x.Logradouro);
            Map(x => x.Numero);
            Map(x => x.Bairro);
            Map(x => x.Complemento);
            Map(x => x.Municipio);
            Map(x => x.Estado);
            Map(x => x.CEP);

        }
    }
}
