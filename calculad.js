function suma(){
  var value1 = $('#v1').val();
  var value2 = $('#v2').val();

  var url = "http://localhost:8085/suma?value1=" + value1 + "&value2=" + value2;
  console.log(url);

  $.getJSON(url,
    function(json) {
      console.log(json);
      $('#res1').html( json.resultado );
    }
  );
}

function rest(){
  var value1 = $('#v1').val();
  var value2 = $('#v2').val();

  var url = "http://localhost:8085/rest?value1=" + value1 + "&value2=" + value2;
  console.log(url);

  $.getJSON(url,
    function(json) {
      console.log(json);
      $('#res1').html( json.resultado );
    }
  );
}

function mult(){
  var value1 = $('#v1').val();
  var value2 = $('#v2').val();

  var url = "http://localhost:8085/mult?value1=" + value1 + "&value2=" + value2;
  console.log(url);

  $.getJSON(url,
    function(json) {
      console.log(json);
      $('#res1').html( json.resultado );
    }
  );
}

function div(){
  var value1 = $('#v1').val();
  var value2 = $('#v2').val();

  var url = "http://localhost:8085/div?value1=" + value1 + "&value2=" + value2;
  console.log(url);

  $.getJSON(url,
    function(json) {
      console.log(json);
      $('#res1').html( json.resultado );
    }
  );
}

function potencia(){
  var value1 = $('#v3').val();

  var url = "http://localhost:8085/potencia?value1=" + value1;
  console.log(url);

  $.getJSON(url,
    function(json) {
      console.log(json);
      $('#res2').html( json.resultado );
    }
  );
}

function raiz(){
  var value1 = $('#v3').val();

  var url = "http://localhost:8085/raiz?value1=" + value1;
  console.log(url);

  $.getJSON(url,
    function(json) {
      console.log(json);
      $('#res2').html( json.resultado );
    }
  );
}
