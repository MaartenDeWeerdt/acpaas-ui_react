import React from 'react';
import classNames from 'classnames';
import Icon from '../../icon';

const sizeClasses = {
  small: 'a-avatar--small',
  medium: 'a-avatar--medium',
  large: 'a-avatar--large'
};

type AvatarSize = "small";

type Props = {
  /** Avatar size ("small")  */
  size: AvatarSizes,
  /** Font Awesome icon name */
  icon: string,
  children: any,
  style: object,
};

const IconWrapper = ({ icon }) => (<span className="a-avatar__icon"><Icon name={icon} /></span>);
const LetterWrapper = ({ letter }) => (<span className="a-avatar__letter">{letter}</span>);

const Avatar = ({ size, icon, image, alt='', letter, children, style }) => {


const Avatar = (props: Props) => {
  const { size, icon, children, style } = props
  const avatarClass = classNames(
    'a-avatar',
    { [`${sizeClasses[size]}`]: !!size },
  );

  return (
    <div className={avatarClass} style={style}>
      {icon && <IconWrapper icon={icon} />}
      {letter && <LetterWrapper letter={letter} />}
      {image && <img src={image} alt={alt}/>}
      {children}
    </div>
  )
}

export default Avatar;