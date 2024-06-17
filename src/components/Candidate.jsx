/* eslint-disable react/prop-types */
function Candidate({ candidates }) {
  return (
    <tbody>
      {" "}
      {/*Corp de la table*/}
      {candidates.map((candidate, index /*Boucle pour chaque candidat*/) => (
        <tr key={index}>
          {" "}
          {/*Ligne pour chaque candidat*/}
          <div className="container">
            <td>{candidate.name}</td> {/*Pour les noms*/}
            <td>
              <img
                src={candidate.image}
                alt={candidate.name}
                className="img-candidates"
              />
            </td>{" "}
            {/*Pour l'image avec le alt*/}
            <td>{candidate.age}</td> {/*Pour l'âge*/}
            <td>{candidate.city}</td> {/*Pour la ville*/}
          </div>
        </tr>
      ))}
    </tbody>
  );
}

export default Candidate;
