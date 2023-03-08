export const fetchJson = async (data) => {
  const response = await fetch(data);
  const json = await response.json();
  console.log(json);
  return json;
  /*console.log (json.results[0].members.length)*/
};

export const selectParties = () => {
  let test = document.getElementsByClassName("form-check-input");
  let arr = [];
  for (let i = 0; i < test.length; i++) {
    if (test[i].checked === true) {
      arr.push(test[i].value);
    }
  }
  console.log(arr)
  return arr;
};
//Array.from(document.querySelectorAll("input[type=checkbox]:checked")).map((elem) => elem.value)
const selectedParties=selectParties()
console.log(selectedParties)

export const makeMemberRows = (data, selectedParties) => {
  console.log(data.results[0].members);
  console.log(selectedParties);
  const members = data.results[0].members;

  /*let arry = [];
  for (let n = 0; n < members.length; n++) {
    for (let i = 0; i < selectedParties.length; i++) {
      if (members[n].party === selectedParties[i]) {
        arry.push(members[n]);
      }
    }
  }
  console.log(arry);*/

  const membersfilt=members.filter((member)=>selectedParties.includes(member.party))
  console.log(membersfilt)

  if (members.length > 0) {
    let temp = "";
    members.forEach((foo) => {
      temp += "<tr>";
      temp +=
        "<td><a href=" +
        foo.url +
        ">" +
        foo.first_name +
        " " +
        foo.last_name +
        "</a></td>";
      temp += "<td>" + foo.party + "</td>";
      temp += "<td>" + foo.state + "</td>";
      temp += "<td>" + foo.seniority + "</td>";
      temp += "<td>" + foo.votes_with_party_pct + "</td></tr>";
    });
    return temp;
    /* document.querySelector("#data-output").appendChild(temp)*/
  }
};


document.getElementById ("inlineCheckbox1").addEventListener ("click", selectParties, false);
document.getElementById ("inlineCheckbox2").addEventListener ("click", selectParties, false);
document.getElementById ("inlineCheckbox3").addEventListener ("click", selectParties, false);
console.log(selectedParties)
document.getElementById ("inlineCheckbox4").addEventListener ("click", makeMemberRows, false);
 
/* const parties = {
            D: 'Democrat',
            R: 'Republican',
            ID: 'Independent'
          }*/

