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

// 2. Use jQuery to append `pick up art supplies` to the screen to the `#groceries` div. 

// 3. Use jQuery to append `diet coke` to the screen to the `#errands` div. 

// 4. Use jQuery to append `hair appt  at 2:15pm` to the screen to the `#calendar` div. 

// 5. Update the time to `submit expense report` to `8:30am` and append the results to the `#calendar` div.

// 6. Add a task of `mow lawn` with a time of `5:30pm` to the `personal` array in `dueToday`. 

// 7. Render all time tasks due today to the `#calendar` div. 
