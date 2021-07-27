import { Component } from 'react';
import styles from './Searchbar.module.css';

export default class Searchbar extends Component {
  state = {
    imageName: '',
  };

  handleImageNameChange = e => {
    this.setState({ imageName: e.currentTarget.value.toLowerCase() });
  };

  handlerSubmit = e => {
    e.preventDefault();
    this.props.onSubmit(this.state.imageName);
    this.setState({ imageName: '' });
  };

  render() {
    return (
      <header className={styles.searchbar}>
        <form onSubmit={this.handlerSubmit} className={styles.searchForm}>
          <button type="submit" className={styles.button}></button>

          <input
            className={styles.input}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            value={this.state.imageName}
            onChange={this.handleImageNameChange}
          />
        </form>
      </header>
    );
  }
}
