using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ManageResources
{
    interface InterfaceCRUD<T>
    {
        void Inserir(T entidade);
        void Alterar(T entidade);
        void Excluir(T entidade);
        T ConsultaByID(int? id);
        IList<T> GetAll();

    }
}
