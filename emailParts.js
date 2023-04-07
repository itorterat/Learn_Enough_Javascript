function emailParts(email) {
  return email
    .toLowerCase()
    .split("@")
    .map((part) => part);
}
