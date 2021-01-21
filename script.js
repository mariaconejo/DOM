/**
 * Ejercicio #3:
 * Usando querySelector y querySelectorAll
 *
 * ¿Que voy a evaluar?
 * 1. Que funcione
 * 2. Buenas practicas
 *
 * NOTA: no se puede modificar el codigo HTML de la pagina
 */

/*
  EJERCICIO A: --------------------------------------------
  
  Selecciona y console.log el <h3> que dice "Esto
  es una lista"
*/

  const titulo =  document.querySelector('h3');
  console.log(titulo);
  

/*
  EJERCICIO B: --------------------------------------------
  
  Selecciona y loguea el primer y el ultimo elemento
  de la lista
*/
  const elementoInicio = document.querySelector('ul').firstElementChild;
  console.log(elementoInicio);
  const elementoFinal = document.querySelector('ul').lastElementChild;
  console.log(elementoFinal);
/*
  EJERCICIO C: --------------------------------------------
  
  Selecciona y loguea el input de tipo "email" del
  formulario
*/
  const email = document.getElementsByTagName('input');
  console.log(email[2]);

/*
  EJERCICIO D: --------------------------------------------
  
  Selecciona y loguea la fila de la tabla que tiene "JavaScript"
*/
  const fila = document.querySelectorAll('tr');
  console.log(fila[2]);

/*
  EJERCICIO E: --------------------------------------------
  
  Selecciona y loguea la celda que dice CSS
*/
  const css = document.querySelectorAll('td');
  console.log(css[4])

/*
  EJERCICIO F: ----------------------------------------------------------
  
  Investiga un metodo de algun elemento y trae un ejemplo de
  para que lo usarias
*/