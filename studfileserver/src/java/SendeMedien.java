/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

import java.io.File;
import java.io.IOException;
import java.io.PrintWriter;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import org.apache.commons.io.FileUtils;

/**
 *
 * @author Phill
 */
@WebServlet(urlPatterns = {"/SendeMedien"})
public class SendeMedien extends HttpServlet {

    /**
     * Processes requests for both HTTP <code>GET</code> and <code>POST</code>
     * methods.
     *
     * @param request servlet request
     * @param response servlet response
     * @throws ServletException if a servlet-specific error occurs
     * @throws IOException if an I/O error occurs
     */
    protected void processRequest(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        System.out.println(request.getParameter("name"));
        if(new Integer(request.getParameter("name")) == 150){
            response.setContentType("application/octet-stream");
            response.setHeader("Content-Disposition", "filename=\"StudBoardLogo150x100.png\"");
            File srcFile = new File("C:\\Projects\\GitHub\\Studinator\\studfileserver\\web\\img\\StudBoardLogo150x100.png");
            FileUtils.copyFile(srcFile, response.getOutputStream());
        }else if(new Integer(request.getParameter("name")) == 300){
            response.setContentType("application/octet-stream");
            response.setHeader("Content-Disposition", "filename=\"StudBoardLogo300x200.png\"");
            File srcFile = new File("C:\\Projects\\GitHub\\Studinator\\studfileserver\\web\\img\\StudBoardLogo300x200.png");
            FileUtils.copyFile(srcFile, response.getOutputStream());
        }
        
        /*response.setContentType("text/html;charset=UTF-8");
        try (PrintWriter out = response.getWriter()) {
            out.println("<!DOCTYPE html>");
            out.println("<html>");
            out.println("<head>");
            out.println("<title>Servlet SendeMedien</title>");            
            out.println("</head>");
            out.println("<body>");
            out.println("<picture id=\"logo\">");
            out.println("<source media=\"(min-width: 650px)\" srcset=\"../../img/StudBoardLogo300x200.png\">");
            out.println("<source media=\"(min-width: 465px)\" srcset=\"../../img/StudBoardLogo150x100.png\">");
            out.println("<img src=\"StudBoardLogo300x200.png\" alt=\"Studinator_Titel\">");
            out.println("<h1>Servlet SendeMedien at " + request.getContextPath() + "</h1>");
            out.println("</body>");
            out.println("</html>");
        }*/
    }

    // <editor-fold defaultstate="collapsed" desc="HttpServlet methods. Click on the + sign on the left to edit the code.">
    /**
     * Handles the HTTP <code>GET</code> method.
     *
     * @param request servlet request
     * @param response servlet response
     * @throws ServletException if a servlet-specific error occurs
     * @throws IOException if an I/O error occurs
     */
    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        processRequest(request, response);
    }

    /**
     * Handles the HTTP <code>POST</code> method.
     *
     * @param request servlet request
     * @param response servlet response
     * @throws ServletException if a servlet-specific error occurs
     * @throws IOException if an I/O error occurs
     */
    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        processRequest(request, response);
    }

    /**
     * Returns a short description of the servlet.
     *
     * @return a String containing servlet description
     */
    @Override
    public String getServletInfo() {
        return "Short description";
    }// </editor-fold>

}
