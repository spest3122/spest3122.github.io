import axios from "@/axios";

const mdaisApiFormat = (item) => {
  //106
  return {
    date: item["公告日期"],
    url: item["網址"],
    title: item["技術移轉項目"],
    vendor: item["授權業者"],
  };
};

const tlriApiFormat = (item) => {
  //110
  return {
    date: item["年度"],
    url: "",
    title: item["技術名稱"],
    vendor: "無授權業者資料提供",
  };
};

const tfriApiFormat = (item) => {
  //105
  return {
    date: item["申請期間"],
    url: "",
    title: item["成果項目"],
    vendor: "無授權業者資料提供",
  };
};
const ttdaresApiFormat = (item) => {
  //141
  return {
    date: item["申請期間"],
    url: "",
    title: item["成果項目"],
    vendor: "無授權業者資料提供",
  };
};
const tydaresApiFormat = (item) => {
  //807
  return {
    date: item["日期"],
    url: item["公告事項網址"],
    title: item["主旨"],
    vendor: "無授權業者資料提供",
  };
};

const matchDataFormat = (id, item) => {
  switch (id) {
    case "106":
      return mdaisApiFormat(item);
    case "110":
      return tlriApiFormat(item);
    case "105":
      return tfriApiFormat(item);
    case "141":
      return ttdaresApiFormat(item);
    case "807":
      return tydaresApiFormat(item);
    default:
      break;
  }
};

const callAgriApi = async ({ id, page = 0 }) => {
  let url = `DataFileService.aspx?UnitId=${id}&$top=20`;
  if (page > 0) {
    url += `&$skip=${page}`;
  }
  let apiResult = await axios.get(url);
  let returnArray = [];
  apiResult.data.map((item) => {
    returnArray.push(matchDataFormat(id, item));
  });
  return returnArray;
};

export default callAgriApi;
