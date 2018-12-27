using FluentNHibernate.Cfg;
using FluentNHibernate.Cfg.Db;
using NHibernate;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ManageResources
{
    public class BuildConnetion
    {
        private static ISessionFactory session;
        public static ISessionFactory Conect()
        {
            if (session != null)
                return session;

            var fluentData = Fluently.Configure()
                              .Database(MsSqlConfiguration.MsSql2012.ConnectionString(c => c
                                  .Server("DIGLEY-PC")
                                  .Database("MOBWEB")
                                  .Username("sa")
                                  .Password("245809")))
                               .Mappings(
                                        m => m.FluentMappings.AddFromAssemblyOf<DataModel.UsuarioMap>()
                                )
                              .BuildSessionFactory();

            var factory = fluentData;

            return factory;
        }
    }
}
