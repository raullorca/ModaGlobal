/* 
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/JSP_Servlet/JavaScript.js to edit this template
 */

function enviarFormulari(event) {
    event.preventDefault(); // Evita que la pàgina es recarregui
    
    const nom = document.getElementById('nom').value;
    const email = document.getElementById('email').value;
    const missatge = document.getElementById('missatge').value;
    
    alert('Formulari enviat a ${nom} \nal email ${email} \namb el missatge: ${missatge}');
}
