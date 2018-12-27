using NHibernate;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ManageResources
{
    public class CRUDImplementation<T> : InterfaceCRUD<T> where T :class
    {
        public void Alterar(T entidade)
        {
            using (ISession session =  BuildConnetion.Conect().OpenSession())
            {
                using (ITransaction tran = session.BeginTransaction())
                {
                    try
                    {
                        session.Delete(entidade);
                    }
                    catch (Exception ex)
                    {
                        if (!session.Transaction.WasCommitted)
                        {
                            session.Transaction.Rollback();
                        }
                        throw new Exception("Erro na Atualização do Registro");
                    }

                }

            }
        }

        public T ConsultaByID(int? id)
        {
            using (ISession session = BuildConnetion.Conect().OpenSession())
            {

                return session.Get<T>(id);
            }
        }

        public void Excluir(T entidade)
        {
            using (ISession session = BuildConnetion.Conect().OpenSession())
            {
                using (ITransaction tran = session.BeginTransaction())
                {
                    try
                    {
                        session.Delete(entidade);
                        tran.Commit();
                    }
                    catch (Exception ex)
                    {
                        if (!session.Transaction.WasCommitted)
                        {
                            session.Transaction.Rollback();
                        }
                        throw new Exception("Erro ao Excluir o Registro");
                    }

                }

            }
        }

        public IList<T> GetAll()
        {
            using (ISession session = BuildConnetion.Conect().OpenSession())
            {

                return (from e in session.Query<T>() select e).ToList();
            }
        }

        public void Inserir(T entidade)
        {
            using (ISession session = BuildConnetion.Conect().OpenSession())
            {
                using (ITransaction tran = session.BeginTransaction())
                {
                    try
                    {
                        session.SaveOrUpdate(entidade);
                        tran.Commit();
                    }
                    catch (Exception ex)
                    {
                        if (!session.Transaction.WasCommitted)
                        {
                            session.Transaction.Rollback();
                        }
                        throw new Exception("Erro ao Salvar o Registro");
                    }

                }

            }
        }
    }
}
