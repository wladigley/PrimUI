using ManageResources;
using ManageResources.DataModel;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace WebApplication1.Controllers
{
    public class PartialController : Controller
    {
        // GET: Partial
        public ActionResult Index()
        {
            return View();
        }



        public ActionResult PartialFormCadastro()
        {
            
            return PartialView("~/Views/Partial/FormCadastro.cshtml");
        }


        public ActionResult PartialFormClienteCadastro()
        {

            return PartialView("~/Views/Partial/FormClienteCadastro.cshtml");
        }
        public ActionResult PartialFormClienteEditar()
        {

            return PartialView("~/Views/Partial/FormClienteEditar.cshtml");
        }

        public ActionResult _PartialFormEditar()
        {
           
            return PartialView("~/Views/Partial/FormEditar.cshtml");
        }

        [HttpGet]
        public ActionResult PartialFormEditar(Usuario id)
        {
            UsuarioCrud user = new UsuarioCrud();
            if (id.IdUser != 0 || id != null)
            {
                var filterById = user.GetAll().Where(x => x.IdUser == id.IdUser).FirstOrDefault(); ;

                return PartialView("~/Views/Partial/FormEditar.cshtml", filterById);

            }
            else
            {
                return PartialView("~/Views/Partial/FormEditar.cshtml");
            }
        }
    }
}