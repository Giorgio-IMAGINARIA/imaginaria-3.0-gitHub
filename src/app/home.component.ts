import { Renderer, ViewChild, ViewChildren, AfterViewInit, Component, OnInit, ElementRef, trigger, state, style, transition, animate } from '@angular/core';
import { Router } from '@angular/router';
// import {WindmillBlueComponent} from './windmillBlue.component.ts';
// import {WindmillRedComponent} from './windmillRed.component.ts';
// import {WindmillWhiteComponent} from './windmillWhite.component.ts';
// import {MbiLogoComponent} from './mbiLogo.component.ts';
// import {GitHubLogoComponent} from './gitHubLogo.component.ts';
// import {LinkedInLogoComponent} from './linkedInLogo.component.ts';
// import {FaceBookLogoComponent} from './faceBookLogo.component.ts';
// import {ProjectToRenderComponent} from './projectToRender.component.ts';

@Component({
    selector: 'my-home',
    templateUrl: 'home.component.html',
    styles: [require('../../public/css/Home/general.css').toString()],
    // directives: [WindmillBlueComponent, WindmillRedComponent, WindmillWhiteComponent, MbiLogoComponent, GitHubLogoComponent, LinkedInLogoComponent, FaceBookLogoComponent, ProjectToRenderComponent],
    animations: [
        trigger('mask', [
            state('inactive', style({
                backgroundColor: 'transparent',
                zIndex: '-1'
            })),
            state('active', style({
                backgroundColor: '#000000',
                zIndex: '2000'
            })),
            transition('inactive => active', animate('500ms ease-in')),
            transition('active => inactive', animate('500ms ease-out'))
        ]),
        trigger('rightMenu', [
            state('inactive', style({
                transform: 'translateX(0px)'
            })),
            state('active', style({
                transform: 'translateX(-251px)'
            })),
            transition('inactive => active', animate('500ms ease-in')),
            transition('active => inactive', animate('500ms ease-out'))
        ]),
        trigger('toBlur', [
            state('inactive', style({
                "-webkit-filter": 'blur(0px)',
                filter: 'blur(0px)'
            })),
            state('active', style({
                "-webkit-filter": 'blur(10px)',
                filter: 'blur(10px)'
            })),
            transition('inactive => active', animate('500ms ease-in')),
            transition('active => inactive', animate('500ms ease-out'))
        ])]
})
export class HomeComponent implements OnInit, AfterViewInit {
    // @ViewChild(ProjectToRenderComponent) private localProjectToRenderComponent: ProjectToRenderComponent;
    private menuState: string;
    constructor(private router: Router, private renderer: Renderer) {
    }
    ngOnInit() {
        this.menuState = 'inactive';
    }
    ngAfterViewInit() {
        // console.log(this.localProjectToRenderComponent);
        // console.log('this.localProjectToRenderComponent.nativeElement',this.localProjectToRenderComponent.nativeElement)
        // this.renderer.invokeElementMethod(this.localProjectToRenderComponent.nativeElement,'focus')
    }
    toggleMenu() {
        if (this.menuState === 'active') {
            this.menuState = 'inactive';
        } else {
            this.menuState = 'active';
        }
    }
    changeProject() {
        // console.log('CHANGE PROJECT!!!');
        // console.log('this.localProjectToRenderComponent.nativeElement',this.localProjectToRenderComponent.nativeElement)
        // console.log(this.localProjectToRenderComponent);
        // this.renderer
    }
}
