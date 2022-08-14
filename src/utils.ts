import { FormatProp } from "./types";

const formatDate = (strDate:string) => {
    const date = new Date(strDate);
    const [year,month,day] = [date.getFullYear(),date.getMonth() + 1,date.getDate()];
    return `作成日 ${year}年${month}月${day}日\n`;
}
const formatContent = (content:string) => {
    return `内容:
    ${content}`;
}
const formatPurpose = (purpose:string) => {
  return `目的:
    ${purpose}`;
}
const formatPlace = (place:string) => {
    return `場所:
    ${place}`;
}
const formatRelation = (relation:string) => {
    const replaced = relation.split("　").join("、");
    console.log({replaced});
    return `関係者:
    ${replaced}`;
}
const formatRemarks = (remarks:string) => {
    return `備考:
    ${remarks}`;
}
export const formatText = (prop: FormatProp) => {
    const {date,content,purpose,place,concernedPerson,remarks} = prop;
  return `${formatDate(date)}
${formatContent(content)}
${formatPurpose(purpose)}
${formatPlace(place)}
${formatRelation(concernedPerson)}
${formatRemarks(remarks)}
    `;
};

    
