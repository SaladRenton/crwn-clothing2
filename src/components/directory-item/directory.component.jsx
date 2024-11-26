import DirectoryCtgItem from '../directory-ctg-item/directory-ctg-item.component';
import {DirectoryContainer} from './directory.styles.jsx';

const Directory = ({ categories }) => (
  <DirectoryContainer>
    {categories.map((category) => (
      <DirectoryCtgItem key={category.id} category={category} />
    ))}
  </DirectoryContainer>
);

export default Directory;


