using FluentNHibernate.Mapping;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ManageResources.DataModel
{
    public class UsuarioMap : ClassMap<Usuario>
    {
        public UsuarioMap()
        {

            Table("Usuario");

            Id(x => x.IdUser);
            Map(x => x.NomeCompleto).Nullable();
            Map(x => x.Apelido).Nullable();
            Map(x => x.Email).Nullable();
            Map(x => x.Telefone).Nullable();
            Map(x => x.Senha).Nullable();

    }


    }
}
