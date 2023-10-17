import { Directive, Input, OnDestroy, OnInit, TemplateRef, ViewContainerRef } from '@angular/core';
import { UsuarioService } from '../services/usuario.service';
import { Subscription, distinctUntilChanged, map, tap } from 'rxjs';

@Directive({
  selector: '[appShowForRoles]'
})
export class ShowForRolesDirective implements OnInit, OnDestroy {

  @Input('appShowForRoles') allowedRoles?: string | any[];
  private sub!: Subscription;

  constructor(private authService: UsuarioService, private viewContainerRef: ViewContainerRef, private templateRef: TemplateRef<any>) {}

  ngOnInit(): void {
    this.sub = this.authService.user$.pipe(
      map((user) => Boolean(user && this.allowedRoles?.includes(user.profile!))),
      distinctUntilChanged(), 
      tap((hasRole)=> hasRole? this.viewContainerRef.createEmbeddedView(this.templateRef):this.viewContainerRef.clear())
    ).subscribe();
  }
  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
}