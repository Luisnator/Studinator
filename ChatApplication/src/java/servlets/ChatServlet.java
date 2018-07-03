/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package servlets;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.PrintWriter;
import java.io.StringReader;
import javax.json.Json;
import javax.json.JsonObject;
import javax.json.JsonReader;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import manager.FileManager;
import org.json.JSONObject;

/**
 *
 * @author Phill
 */
public class ChatServlet extends HttpServlet {

    /**
     * Processes requests for both HTTP <code>GET</code> and <code>POST</code>
     * methods.
     *
     * @param request servlet request
     * @param response servlet response
     * @throws ServletException if a servlet-specific error occurs
     * @throws IOException if an I/O error occurs
     */
    protected void processRequest(HttpServletRequest request, HttpServletResponse response, JSONObject jo)
            throws ServletException, IOException {
        String ret = "-1";
        if (jo == null){
            String username = request.getParameter("username");
            String newUser = request.getParameter("newUser");
            if (newUser.equals("1")){
                FileManager.writeIncomplete(new JSONObject("{\"username\":\"" + "Server" + "\",\"message\":\"Willkommen " + username + "!\"}"));
                FileManager.writeDone(new JSONObject("{\"username\":\"" + "Server" + "\",\"message\":\"\"}"));
            }
            ret = FileManager.getUnknown(new JSONObject("{\"username\":\"" + username + "\",\"message\":\"\"}"));
        }else{
            ret = FileManager.getUnknown(jo);
        }
        response.setContentType("application/json;charset=UTF-8");
        try (PrintWriter out = response.getWriter()) {
            out.println(ret);
        }
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
        processRequest(request, response, null);
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
        String content = "";
        BufferedReader br = request.getReader();
        String s = br.readLine();
        while(s != null){
            content += s;
            s = br.readLine();
        }
        System.out.println("REQUEST: " + content);
        
        JSONObject jo = new JSONObject(content);
        
        if(jo.getString("message").equals("\n")){
            FileManager.writeDone(jo);
        }else{
            FileManager.writeIncomplete(jo);
        }
        
        processRequest(request, response, jo);
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
