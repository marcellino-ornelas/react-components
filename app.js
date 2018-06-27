// TODO
var App = () => (
  <GroceryList list={['eggs','milk']}></GroceryList>
);

var GroceryList = (props) => (
  <ul>
    { props.list.map(function(item,i){
      return <GroceryListItem name={item} key={i} />
    }) }
  </ul>
);


class GroceryListItem extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      isHovering: false
    }

    this.toggleHover = this.toggleHover.bind(this);
  }

  toggleHover(){
    this.setState({ isHovering: !this.state.isHovering });
  }

  render(){
  
    var style = {
      fontWeight: this.state.isHovering ? 'bold' : 'normal'
    }

    return(
      <li style={style} onMouseEnter={this.toggleHover} onMouseLeave={this.toggleHover}>{this.props.name}</li>
    )
  }
}

ReactDOM.render(<App />, document.getElementById("app"));