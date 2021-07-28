import { Controller, Get } from "@nestjs/common";

@Controller('devi-bag-tags')
export class DeviBagTagsController {
  @Get()
  getDeviBagTags(): any[] {
    return [
      {id: '001', name: 'Все товары', img: ['interior_title-16.jpg']},
      {id: '002', name: 'Кресла-мешки из ткани грета, однотонные', img: ['khaki_title.jpg']},
      {id: '003', name: 'Кресла-мешки из ткани грета, + фабричные рисунки', img: ['beige-butterfly_title.jpg']},
      {id: '004', name: 'Кресла-мешки из ткани грета, + ваш принт', img: ['burgundy-barcelona_title.jpg']},
      {id: '005', name: 'Кресла-мешки из мебельной ткани', img: ['furniture-beige-flowers_title.jpg']},
      {id: '006', name: 'Диваны-мешки из ткани грета или мебельной', img: ['interior_title-11.jpg']},
      /*{id: '007', name: 'Прочее', img: ['interior-19.jpg']},*/
      {id: '008', name: 'Интерьер', img: ['interior_title-12.jpg']},

    ];
  }
}
