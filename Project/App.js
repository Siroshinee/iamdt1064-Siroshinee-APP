import React from 'react';
import { View, TextInput, StatusBar, Text,FlatList,TouchableOpacity, Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

export default class App extends React.Component {
  state= {
    inputValue: '',
    todos: []
  };
    changeText= value => {
      this.setState({
        inputValue: value
      });
    };

    addItem = () => {
      if (this.state.inputValue !== ''){
        this.setState(prevState => {
          const newToDo = {
            title: this.state.inputValue,
            createdAt: Date.now(),
          };

          var todos = this.state.todos.concat(newToDo);

          this.setState({
            todos: todos,
          });
        });
      }
    };

  render() {
    const todos = this.state.todos.reverse().map((todo, key) =>
    <View style={style.list}>
    <Image
          style={{width: 50, height: 50}}
          source={{uri: 'https://cdn2.iconfinder.com/data/icons/bullet-points-1/64/Bulletpoint_Bullet_Listicon_Shape_Bulletfont_Glyph_Typography_Bullet_Point_Customshape_Wingding_Custom_Star_Four_Square_Decoretive-512.png'}} 
        />
    <TouchableOpacity style={style.bullet}>
        </TouchableOpacity>
        <Text
        style={style.todotitle}>{todo.title} </Text>
        </View>
   );

    return (
 
       <LinearGradient
          colors={[ '#84CC5D', '#1EB1DD']}
          style={style.lineargradient}>
        <StatusBar barStyle="light-content" />
        <View>
        <TextInput
        style={style.input}
        onSubmitEditing={this.addItem}
        onChangeText={this.changeText}
        placeholder="Type here to add something."
        placeholderTextColor={'#fff'}
        multiline={true}
        autoCapitalize="sentences"
        underlineColorAndroid="transparent"
        selectionColor={"white"}
        maxLength={30}
        returnKeyType="done"
        autoCorrect={false}
        blurOnSubmit={true}
        />
        
      </View>
      <View>
      {todos}
      </View>
      </LinearGradient>
    );
  }
}

const style = {
  input:
  {
    marginTop: 30,
    paddingTop: 10,
    paddingRight:15,
    paddingLeft: 15,
    fontSize: 34,
    color: "white",
    fontWeight: "500"
    },
   
    lineargradient :
    { 
      flex:1
    },
   
    todotitle :
     { 
      paddingLeft: 10, 
      marginTop: 10, 
      fontSize: 28, 
      color: "black"
    },
     
      bullet :
      { 
      width: 20,
      height: 20,
      borderRadius: 15,
      borderWidth: 3,
      borderColor: 'black',
      margin: 15
    },

    list :
       { 
      flexDirection: 'row',
      marginTop:20
    },
    };