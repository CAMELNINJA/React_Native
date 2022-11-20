export type RootStackParamList = {
    Home: undefined;
    UserList: undefined;
    UserProfile: { userName: string };
    About: undefined;
    ToDo:{ name: string,onDelete : ()=>void }
    ToDoLine:{ name: string,onDelete : ()=>void }
};