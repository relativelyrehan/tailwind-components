const convertDataToHtml = blocks => {
  var convertedHtml = '';
  var heading = '';
  blocks.map(block => {
    switch (String(block.data.level)) {
      case '1':
        heading = 'text-3xl';
        break;
      case '2':
        heading = 'text-2xl';
        break;
      case '3':
        heading = 'text-xl';
        break;
      default:
        heading = 'text-sm';
    }
    switch (block.type) {
      case 'header':
        convertedHtml += `<h${block.data.level} class="${heading}">${block.data.text}</h${block.data.level}>`;
        break;
      case 'embed':
        convertedHtml += `<div class="mx-auto my-0"><iframe width="560" height="315" src="${block.data.embed}" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe></div>`;
        break;
      case 'paragraph':
        convertedHtml += `<p>${block.data.text}</p>`;
        break;
      case 'delimiter':
        convertedHtml += '<hr />';
        break;
      case 'image':
        convertedHtml += `<img class="img-fluid mx-auto my-0" src="${block.data.file.url}" title="${block.data.caption}" /><br /><em>${block.data.caption}</em>`;
        break;
      case 'list':
        convertedHtml += '<ul class="list-disc">';
        block.data.items.forEach(function (li) {
          convertedHtml += `<li>${li}</li>`;
        });
        convertedHtml += '</ul>';
        break;
      default:
        break;
    }
  });
  return convertedHtml;
};

export default convertDataToHtml;
