import { useState } from "react";
import { StyledEachIdea } from "./styles/IdeaPage.styled";

const Idea = ({ initialIdea, updateIdea, deleteIdea }) => {
  const [idea, setIdea] = useState({
    title: initialIdea.title,
    description: initialIdea.description,
    _id: initialIdea._id
  });

  const handleChange = (event) => {
    const newIdea = { ...idea };
    newIdea[event.target.name] = event.target.value;
    setIdea(newIdea);
    console.log(newIdea);
  };

  return (
    <StyledEachIdea>
        <input
          type="text"
          name="title"
          value={idea.title}
          onChange={handleChange}
          onBlur={() => updateIdea(idea._id, idea.title, idea.description)}
        />
        <textarea
          name="description"
          value={idea.description}
          onChange={handleChange}
          onBlur={() => updateIdea(idea._id, idea.title, idea.description)}
        />
        <button onClick={() => deleteIdea(idea._id)}>Delete Idea</button>
    </StyledEachIdea>
  );
};

export default Idea;
