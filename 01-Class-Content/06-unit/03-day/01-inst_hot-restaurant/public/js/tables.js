$(function(){

  /**
   * Render the reservation data to the appropriate part of the page.
   * The first parameter is the array of reservations to render.
   * The second parameter is the parent element to append to (.tables or .waitlist).
   */
  const render = function (dataList, parent){
    for (let i = 0; i < dataList.length; i++){
      const reservation = $('<div>').addClass('box');
      reservation.append(`<h3>${dataList[i].customerName}</h3>`);
      reservation.append(`<p>${dataList[i].customerEmail}</p>`);
      reservation.append(`<p>${dataList[i].phoneNumber}</p>`);

      parent.append(reservation)
    }
  }

  /**
   * GET all the tables from the server.
   * Then call render to render the data.
   */
  const getTables = function(){
    $.ajax({
      method: 'GET',
      url: 'api/tables'
    }).then(function(data){
      render(data, $('.tables'));
    });
  }

  /**
   * GET all the waitlist data from the server.
   * Then call render to render the data.
   */
  const getWaitList = function(){
    $.ajax({
      method: 'GET',
      url: 'api/waitinglist'
    }).then(function(data){
      render(data, $('.waitlist'));
    });
  }
  
  getTables();
  getWaitList();

  $('#clear').on('click', clearAll);
});