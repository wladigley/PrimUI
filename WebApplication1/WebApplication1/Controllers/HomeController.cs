using ManageResources;
using ManageResources.DataModel;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace WebApplication1.Controllers
{
    public class HomeController : Controller
    {
        
        public ActionResult Index()
        {
            if (Session["UsuarioLogado"] == "true")
            {
                ViewBag.BehaviorManage = "Usuarios CRUD";
                return View();
            }
            else
            {
                TempData["notice"] = "Usuario ou senha incorretos!!!";
                return RedirectToAction("Login");
            }
            

        }
      
        [HttpGet]
        public string IndexPost()
        {
            
            UsuarioCrud user = new UsuarioCrud();

            var result = user.GetAll();

            var model = JsonConvert.SerializeObject(result);

            return model;
        }

        [HttpPost]
        public ActionResult AdicionarUser(Usuario user)
        {
            UsuarioCrud usu = new UsuarioCrud();
            usu.Inserir(user);
            //ViewBag.Message = "Your application description page.";

            return RedirectToAction("Index");
        }


        public string PesquisaByID(int? id)
        {

            UsuarioCrud user = new UsuarioCrud();
            if (id!=0 || id!=null)
            {
                var result = user.ConsultaByID(id);

                var model = JsonConvert.SerializeObject(result);

                return model;
            }
            else
            {
                return null;
            }
            
        }


        public string DeletarUsuario(Usuario user)
        {
            UsuarioCrud usu = new UsuarioCrud();
            usu.Excluir(user);

            return "Deletado com Sucesso";
        }

        [HttpPost]
        public ActionResult ValidLogin(Usuario user)
        {
            UsuarioCrud usu = new UsuarioCrud();
            var usuarioValido = usu.GetAll().Where(x=>x.Email == user.Email && x.Senha == user.Senha).FirstOrDefault();
            if (usuarioValido !=null)
            {
                Session["NomeUser"] = usuarioValido.NomeCompleto;
                Session["UsuarioLogado"] = "true";

                return RedirectToAction("Index");
            }
            else
            {

                TempData["notice"] = "Usuario ou senha incorretos!!!";
                return RedirectToAction("Login");
            }

        }
        public ActionResult LogOut()
        {
            Session.Clear();
            return RedirectToAction("Login");
        }
        public ActionResult Login()
        {
            return View();
        }

        /*
         * CLIENTES ActionsResults
         * 
         * 
        */
        public string ClienteBoardList()
        {

            ClienteCrud user = new ClienteCrud();

            var result = user.GetAll();

            var model = JsonConvert.SerializeObject(result);

            return model;
        }


        public ActionResult ClienteBoard()
        {
            if (Session["UsuarioLogado"] == "true")
            {
                ViewBag.BehaviorManage = "Clientes CRUD";
                ViewBag.Manager = 2;
                return View();
            }
            else
            {
                TempData["notice"] = "Usuario ou senha incorretos!!!";
                return RedirectToAction("Login");

            } 
           
        }

        [HttpPost]
        public ActionResult AdicionarCliente(Cliente cliente)
        {
            ClienteCrud usu = new ClienteCrud();
            usu.Inserir(cliente);
            //ViewBag.Message = "Your application description page.";

            return RedirectToAction("ClienteBoard");
        }
        public string PesquisaClienteByID(int? id)
        {

            ClienteCrud cli = new ClienteCrud();
            if (id != 0 || id != null)
            {
                var result = cli.ConsultaByID(id);

                var model = JsonConvert.SerializeObject(result);

                return model;
            }
            else
            {
                return null;
            }

        }


        public string DeletarCliente(Cliente cliente)
        {
            ClienteCrud cli = new ClienteCrud();
            cli.Excluir(cliente);

            return "Deletado com Sucesso";
        }
    }
}