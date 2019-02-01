const todoList =[
  {
    tasks: {
      grocery: {
        produce: ['apple', 'broccoli', 'peach'],
        drinks: {
          sodas: ['pepsi', 'diet coke'],
          juices: ['orange']
        }
      },
      errands: {
        household: ['grocery store', 'hardware store'],
        personal: ['pick up art supplies']
      },
      dueToday: {
        work: [
          {
            task: 'call Sam',
            time: '8:20pm'
          },
          {
            task: 'submit expense report',
            time: '8:00am'
          }
        ],
        personal: [
          {
            task: 'hair appt',
            time: '2:15pm'
          },
          {
            task: 'drop off Charlie',
            time: '8:00am'
          }
        ]
      } 
    }
  }
];

// 1. Use jQuery to append `apple` to the screen to the `#groceries` div.
$('#groceries').append(`<p>${todoList[0].tasks.grocery.produce[0]}</p>`);

// 2. Use jQuery to append `pick up art supplies` to the screen to the `#errands` div. 
$('#errands').append(`<p>${todoList[0].tasks.errands.personal[0]}</p>`);

// 3. Use jQuery to append `diet coke` to the screen to the `#groceries` div. 
$('#groceries').append(`<p>${todoList[0].tasks.grocery.drinks.sodas[1]}</p>`);

// 4. Use jQuery to append `hair appt  at 2:15pm` to the screen to the `#calendar` div. 
const hairTask = todoList[0].tasks.dueToday.personal[0].task;
const hairTime = todoList[0].tasks.dueToday.personal[0].time;

$('#calendar').append(`<p>${hairTask} at ${hairTime}</p>`);

// 5. Update the time to `submit expense report` to `8:30am` and append the results to the `#calendar` div.
todoList[0].tasks.dueToday.work[1].time = '8:30am';

const expenseTask = todoList[0].tasks.dueToday.work[1].task;
const expenseTime = todoList[0].tasks.dueToday.work[1].time;

$('#calendar').append(`<p>${expenseTask} at ${expenseTime}</p>`);

// 6. Add a task of `mow lawn` with a time of `5:30pm` to the `personal` array in `dueToday`.
const mowLawn = {
  task: 'mow lawn',
  time: '5:30pm'
}

todoList[0].tasks.dueToday.personal.push(mowLawn) 

// 7. Render all time tasks due today to the `#calendar` div.

$('#calendar').empty();
 
const dueToday = todoList[0].tasks.dueToday

for( let i = 0; i < dueToday.work.length; i++ ){
  const task = todoList[0].tasks.dueToday.work[i].task;
  const time = todoList[0].tasks.dueToday.work[i].time
  $('#calendar').append(`<p>${task} at ${time}</p>`);
}

for( let i = 0; i < dueToday.personal.length; i++ ){
  const task = todoList[0].tasks.dueToday.personal[i].task;
  const time = todoList[0].tasks.dueToday.personal[i].time
  $('#calendar').append(`<p>${task} at ${time}</p>`);
}
