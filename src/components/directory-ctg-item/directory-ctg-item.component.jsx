import { useNavigate } from 'react-router-dom';

import { BackgroundImage, Body, DirectoryItemContainer } from './directory-ctg-item.styles.jsx';

const DirectoryCtgItem = ({ category }) => {
  const { imageUrl, title, route } = category;
  const navigate = useNavigate();

  const onNavigateHandler = () => navigate(route);

  return (
    <DirectoryItemContainer onClick={onNavigateHandler}>
      <BackgroundImage 
        style={{ backgroundImage: `url(${imageUrl})` }} 
      />
      <Body>
        <h2>{title}</h2>
        <p>Shop Now</p>
      </Body>
    </DirectoryItemContainer>
  );
};

export default DirectoryCtgItem;