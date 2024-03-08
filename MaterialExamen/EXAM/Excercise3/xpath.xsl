<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0"
xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
<xsl:template match="/">
  <html>
  <body>
    <table border="1">
      <tr bgcolor="gray">
        <th>Detail</th>
        <th>Price (no IVA)</th>
        <th>Price (with IVA)</th>
      </tr>
    <xsl:for-each select="//article">
  
    <tr>
      <td>
          <xsl:value-of select="details"/>
      </td>
      <td>
          <xsl:value-of select="price"/>
      </td>
      <td><xsl:value-of select="price + (price * 0.21)"/></td>
    </tr>
  <!--count(//article[item = 'T-shirt'])-->
  </xsl:for-each>
    </table>
  </body>
  </html>
</xsl:template>
</xsl:stylesheet>