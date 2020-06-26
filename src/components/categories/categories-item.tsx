import React from "react";

interface Props {
  link: string;
  name: string;
  icon: string;
}

class GroupCategoriesItem extends React.Component<Props> {
  render() {
    const { link, name, icon } = this.props;
    return (
      <a href={link} className="group-categories-item">
        <img src={icon} alt={name} />
        <span>{name}</span>
      </a>
    );
  }
}

export default GroupCategoriesItem;
