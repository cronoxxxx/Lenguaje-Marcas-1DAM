<?xml version="1.0" encoding="ISO-8859-1"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">

  <xsl:template match="/">
    <html>
      <head>
        <style>
          table {
            border-collapse: collapse;
            width: 100%;
          }
          th, td {
            border: 1px solid black;
            padding: 8px;
            text-align: left;
          }
          th {
            background-color: green;
          }
        </style>
      </head>
      <body>
        <h2>Book List</h2>
        <ul>
          <xsl:apply-templates select="//book"/>
        </ul>
        <xsl:apply-templates select="//section"/>
      </body>
    </html>
  </xsl:template>

  <xsl:template match="book">
    <li><xsl:value-of select="title"/></li>
  </xsl:template>

  <xsl:template match="section">
    <h3><xsl:value-of select="@par"/></h3>
    <table>
      <tr>
        <th>Title</th>
        <th>Number of Pages</th>
      </tr>
      <xsl:apply-templates select="chapter"/>
    </table>
  </xsl:template>

  <xsl:template match="chapter">
    <tr>
      <td><xsl:value-of select="title"/></td>
      <td><xsl:value-of select="npages"/></td>
    </tr>
  </xsl:template>

</xsl:stylesheet>
