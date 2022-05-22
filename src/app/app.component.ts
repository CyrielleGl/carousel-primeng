import { Component, OnInit, ElementRef, AfterViewInit, HostListener} from '@angular/core';
import { delay } from 'rxjs/operators';
import { News } from './news';
import { ResizeService } from './resize.service';
import { SCREEN_SIZE } from './screen-size.enum';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit, AfterViewInit {
  title = 'carousel-multiple';
  mobile = false;
  news!: News[];
  // service.getlabel("page-index.news") =>
  pageIndexNews = 'NEWS';
  // service.getlabel("page-index.all") =>
  pageIndexAll = 'ALL';
  responsiveOptions: [{
    breakpoint: String,
    numVisible: number,
    numScroll: number
  }];

  prefix = 'is-';
  sizes = [
    {
      id: SCREEN_SIZE.XS, name: 'xs',
      css: `d-block d-sm-none`
    },
    {
      id: SCREEN_SIZE.SM, name: 'sm',
      css: `d-none d-sm-block d-md-none`
    },
    {
      id: SCREEN_SIZE.MD, name: 'md',
      css: `d-none d-md-block d-lg-none`
    },
    {
      id: SCREEN_SIZE.LG, name: 'lg',
      css: `d-none d-lg-block d-xl-none`
    },
    {
      id: SCREEN_SIZE.XL, name: 'xl',
      css: `d-none d-xl-block`
    },
  ];

  constructor(private elementRef: ElementRef, private resizeSvc: ResizeService) {
    if (window.screen.width <= 767) {
      this.mobile = true;
      this.responsiveOptions = [{
        breakpoint: '1024px',
        numVisible: 1,
        numScroll: 1
      }];
    }
    else {
      this.responsiveOptions = [{
        breakpoint: '1024px',
        numVisible: 4,
        numScroll: 1
      }];
    }
    this.resizeSvc.onResize$
      .pipe(delay(0))
      .subscribe(x => {
        this.responsiveOptions = [{
          breakpoint: '1024px',
          numVisible: x,
          numScroll: 1
        }];
      });
  }

  @HostListener("window:resize", [])
  private onResize() {
    this.detectScreenSize();
  }

  ngAfterViewInit() {
    this.detectScreenSize();
  }

  ngOnInit() {
    this.news = [
      {
        pictureurl: 'https://i-mom.unimedias.fr/2022/03/14/chat.jpg?auto=format,compress&cs=tinysrgb',
        newsname: 'Toto 1',
        publicationtime: '01/05/2022',
        newscontent: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi. Proin porttitor, orci nec nonummy molestie, enim est eleifend mi, non fermentum diam nisl sit amet erat.'
      },
      {
        pictureurl: 'https://cdn.futura-sciences.com/buildsv6/images/wide1920/a/0/f/a0fc73919d_50166390_chaton.jpg',
        newsname: 'Toto 2',
        publicationtime: '01/05/2022',
        newscontent: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi. Proin porttitor, orci nec nonummy molestie, enim est eleifend mi, non fermentum diam nisl sit amet erat.'
      },
      {
        pictureurl: 'https://www.leparisien.fr/resizer/dxeKDoZ9oIMydrKE4h3nzeFb0CM=/932x582/cloudfront-eu-central-1.images.arcpublishing.com/leparisien/KIOHEM7YJBRED3P2P5FBOREIIM.jpg',
        newsname: 'Toto 3',
        publicationtime: '01/05/2022',
        newscontent: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi. Proin porttitor, orci nec nonummy molestie, enim est eleifend mi, non fermentum diam nisl sit amet erat.'
      },
      {
        pictureurl: 'https://cdn.radiofrance.fr/s3/cruiser-production/2020/08/f76e923a-0072-4c0d-9837-7bf89d315133/1136_les_chats.jpg',
        newsname: 'Toto 4',
        publicationtime: '01/05/2022',
        newscontent: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi. Proin porttitor, orci nec nonummy molestie, enim est eleifend mi, non fermentum diam nisl sit amet erat.'
      },
      {
        pictureurl: 'https://geo.img.pmdstatic.net/fit/http.3A.2F.2Fprd2-bone-image.2Es3-website-eu-west-1.2Eamazonaws.2Ecom.2FGEO.2Fvar.2Fgeo.2Fstorage.2Fimages.2Fmedia.2Fsa-domestication-n-a-pas-emousse-l-instinct-de-ce-chasseur-hors-pair.2F2052028-1-fre-FR.2Fsa-domestication-n-a-pas-emousse-l-instinct-de-ce-chasseur-hors-pair.2Ejpg/1200x630/cr/wqkgRGF1Z2lyZGFzIFRvbWFzIFJhY3lzIC8gR2V0dHkgSW1hZ2VzIC8gR0VP/chat-quand-minou-devient-un-tueur-en-serie.jpg',
        newsname: 'Toto 5',
        publicationtime: '01/05/2022',
        newscontent: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi. Proin porttitor, orci nec nonummy molestie, enim est eleifend mi, non fermentum diam nisl sit amet erat.'
      },
      {
        pictureurl: 'https://static.actu.fr/uploads/2022/01/fd56e2f801f166266e2f801f1b766ev.jpg',
        newsname: 'Toto 6',
        publicationtime: '01/05/2022',
        newscontent: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi. Proin porttitor, orci nec nonummy molestie, enim est eleifend mi, non fermentum diam nisl sit amet erat.'
      },
      {
        pictureurl: 'https://www.sciencesetavenir.fr/assets/img/2020/01/17/cover-r4x3w1000-5e21bf77a1547-chartreux-3298051-1920.jpg',
        newsname: 'Toto 7',
        publicationtime: '01/05/2022',
        newscontent: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi. Proin porttitor, orci nec nonummy molestie, enim est eleifend mi, non fermentum diam nisl sit amet erat.'
      },
      {
        pictureurl: 'https://jardinage.lemonde.fr/images/dossiers/2021-10/chat-heureux-151433.jpg',
        newsname: 'Toto 8',
        publicationtime: '01/05/2022',
        newscontent: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi. Proin porttitor, orci nec nonummy molestie, enim est eleifend mi, non fermentum diam nisl sit amet erat.'
      },
      {
        pictureurl: 'https://feelloo.com/wp-content/uploads/2019/10/jeune-chat-pexels-104827-900x598.jpeg',
        newsname: 'Toto 9',
        publicationtime: '01/05/2022',
        newscontent: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi. Proin porttitor, orci nec nonummy molestie, enim est eleifend mi, non fermentum diam nisl sit amet erat.'
      },
    ];
  }

  private detectScreenSize() {
    const currentSize = this.sizes.find(x => {
      const el = this.elementRef.nativeElement.querySelector(`.${this.prefix}${x.id}`);
      console.log("el: ", el);
      const isVisible = window.getComputedStyle(el).display != 'none';

      return isVisible;
    });
    if(currentSize != undefined) {
      this.resizeSvc.onResize(currentSize.id);
    }
  }

}
