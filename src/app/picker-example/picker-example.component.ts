import { Component, OnInit } from '@angular/core';
import { PickerController } from "@ionic/angular";
@Component({
  selector: 'app-picker-example',
  templateUrl: './picker-example.component.html',
  styleUrls: ['./picker-example.component.scss'],
})
export class PickerExampleComponent implements OnInit {
  defaultColumnOptions = [
    [
      'Dog',
      'Cat',
      'Bird',
      'Lizard',
      'Chinchilla'
    ]
  ];
  multiColumnOptions = [
    [
      'Minified',
      'Responsive',
      'Full Stack',
      'Mobile First',
      'Serverless'
    ],
    [
      'Tomato',
      'Avocado',
      'Onion',
      'Potato',
      'Artichoke'
    ]
  ];
  constructor(public pickerController : PickerController) { }

  ngOnInit() {}
  
  async openPicker(numColumns = 2, numOptions = 5, columnOptions = this.multiColumnOptions){
    const picker = await this.pickerController.create({
      columns: this.getColumns(numColumns, numOptions, columnOptions),
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel'
        },
        {
          text: 'Confirm',
          handler: (value) => {
            console.log(`Got Value ${value['col-0'].text}`);
          }
        }
      ]
    });
    await picker.present();
  }
  getColumns(numColumns, numOptions, columnOptions) {
    let columns = [];
    for (let i = 0; i < numColumns; i++) {
      columns.push({
        name: `col-${i}`,
        options: this.getColumnOptions(i, numOptions, columnOptions)
      });
    }
    return columns;
  }
  getColumnOptions(columnIndex, numOptions, columnOptions) {
    let options = [];
    for (let i = 0; i < numOptions; i++) {
      options.push({
        text: columnOptions[columnIndex][i % numOptions],
        value: i
      })
    }
    return options;
  }
}
