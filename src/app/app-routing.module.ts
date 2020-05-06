import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NameEditorComponent } from "./name-editor/name-editor.component";
import { NestedFormComponent } from "./nested-form/nested-form.component";

const routes: Routes = [
  { path: '', component: NameEditorComponent},
  { path: 'nested', component: NestedFormComponent}
];

export const routeComponentForImport = [NameEditorComponent, NestedFormComponent];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const componentsForRouting =routeComponentForImport;

