import {Todo} from "./Todo";
import {Product} from "./eShop"

export type RootStackParamList = {
    Home: undefined;
    Auth: undefined;
    Todo: Todo;
    TodoScreen: undefined;
    Timer: undefined;
    WeatherMain: undefined;
    Weather: undefined;
    ProductScreen:  Product;
};