import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Idea from "./Idea";
import {
  StyledIdea,
  StyledIdeaPage,
  StyledSorting,
  StyledToast,
} from "./styles/IdeaPage.styled";

export default function IdeaPage() {
  const { userId } = useParams();

  const [ideas, setIdeas] = useState([]);
  const [user, setUser] = useState({
    userName: "",
    _id: "",
  });

  const [showToast, setShowToast] = useState(false);
  const [toastContent, setToastContent] = useState("");

  const createIdea = async () => {
    const res = await fetch(`/api/users/${user._id}/ideas`, { method: "POST" });
    const data = await res.json();
    setIdeas(data.data.ideas);
    handleToast("You have added a new idea");
  };

  const updateIdea = async (id, title, description) => {
    const res = await fetch(`/api/users//${user._id}/ideas/${id}`, {
      method: "PATCH",
      body: JSON.stringify({
        title,
        description,
      }),
      headers: { "Content-Type": "application/json; charset=utf-8" },
    });
    const data = await res.json();
    setIdeas(data.data.ideas);
    handleToast("Your idea has been saved");
  };

  const deleteIdea = async (id) => {
    const res = await fetch(`/api/users/${user._id}/ideas/${id}`, {
      method: "DELETE",
    });
    const data = await res.json();
    setIdeas(data.data.ideas);
    handleToast("Your idea has been deleted");
  };

  const handleToast = (message) => {
    setToastContent(message);
    setShowToast(true);
    setTimeout(() => {
      setShowToast(false);
      setToastContent("");
    }, 1000);
  };

  const handleSorting = (event) => {
    console.log(ideas);
    let newIdeas = [...ideas];
    if (event.target.value === "A to Z") {
      newIdeas.sort(function (a, b) {
        const titleA = a.title.toUpperCase();
        const titleB = b.title.toUpperCase();
        if (titleA < titleB) {
          return -1;
        }
        if (titleA > titleB) {
          return 1;
        }
        return 0;
      });
    } else {
      newIdeas.sort(function (a, b) {
        const titleA = a.title.toUpperCase();
        const titleB = b.title.toUpperCase();
        if (titleA > titleB) {
          return -1;
        }
        if (titleA < titleB) {
          return 1;
        }
        return 0;
      });
    }
    setIdeas(newIdeas);
  };

  useEffect(() => {
    fetch(`/api/users/${userId}`, { method: "GET" })
      .then((res) => res.json())
      .then((json) => {
        setUser(json.data);
        setIdeas(json.data.ideas);
      })
      .catch((err) => console.log("Error loading ideas", err));
  }, []);

  return (
    <StyledIdeaPage>
      <div>
        <h1>Hi {user.userName}! Welcome to Your Idea Board</h1>
        <div>
          <button onClick={createIdea}>New Idea</button>
          <button>
            <Link to="/login">Back to Login</Link>
          </button>
        </div>
      </div>
      <StyledToast
        style={showToast ? { visibility: "visible" } : { visibility: "hidden" }}
      >
        {toastContent}
      </StyledToast>
      <StyledSorting>
        Sort by idea name{" "}
        <select onChange={handleSorting} placeholder="please select">
          <option value="" disabled selected hidden>
            please select
          </option>
          <option value="A to Z">From A to Z</option>
          <option value="Z to A">From Z to A</option>
        </select>
      </StyledSorting>
      <StyledIdea>
        {ideas.map((idea) => (
          <Idea
            key={idea._id}
            initialIdea={idea}
            updateIdea={updateIdea}
            deleteIdea={deleteIdea}
          />
        ))}
      </StyledIdea>
    </StyledIdeaPage>
  );
}
