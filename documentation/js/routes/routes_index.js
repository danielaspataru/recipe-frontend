var ROUTES_INDEX = {"name":"<root>","kind":"module","className":"AppModule","children":[{"name":"appRoutes","filename":"src/app/app-routing.module.ts","module":"AppRoutingModule","children":[{"path":"","redirectTo":"/recipes","pathMatch":"full"},{"path":"recipes","component":"RecipesComponent","children":[{"path":"","component":"RecipeStartComponent"},{"path":"new","component":"RecipeEditComponent"},{"path":":id","component":"RecipeDetailComponent"},{"path":":id/edit","component":"RecipeEditComponent","canActivate":["AuthGuard"]}]},{"path":"shopping-list","component":"ShoppingListComponent"},{"path":"signup","component":"SignupComponent"},{"path":"signin","component":"SigninComponent"}],"kind":"module"}]}
