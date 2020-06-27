import React from "react";
import { Link } from "react-router-dom";

interface Props {
  link: string;
  name: string;
  icon: string;
}

class GroupCategoriesItem extends React.Component<Props> {
  render() {
    const { link, name, icon } = this.props;
    return (
      <Link to={link} className="group-categories-item">
        <img src={icon} alt={name} />
        <span>{name}</span>
      </Link>
    );
  }
}

export default GroupCategoriesItem;
