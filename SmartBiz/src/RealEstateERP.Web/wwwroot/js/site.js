// Mobile card layout for lists: copy each column's header text onto its cells (shown on small screens by site.css).
(function () {
    document.querySelectorAll('table.table-stack').forEach(function (table) {
        var labels = Array.prototype.map.call(table.querySelectorAll('thead th'), function (th) { return th.textContent.trim(); });
        table.querySelectorAll('tbody tr').forEach(function (row) {
            Array.prototype.forEach.call(row.children, function (cell, i) {
                if (labels[i] && !cell.hasAttribute('data-label')) cell.setAttribute('data-label', labels[i]);
            });
        });
    });
})();
