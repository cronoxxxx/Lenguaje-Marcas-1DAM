<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0"
xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
<xsl:template match="/">
  <html>
    

  <body>
    <table border="1">
      <tr bgcolor="gray">
        <th>Article</th>
        <th>Detail</th>
        <th>Price (no IVA)</th>
        <th>Order</th>
        <th> Reference</th>
      </tr>


      


    <xsl:for-each select="//article">
    <xsl:if test="item = 'T-shirt'">
    <tr>
      <td>
          <xsl:value-of select="item"/>
      </td>
      <td>
          <xsl:value-of select="details"/>
      </td>
      <td>
          <xsl:value-of select="price"/>
      </td>
      <td>
          <xsl:value-of select="order"/>
      </td>
      <td>
          <xsl:value-of select="reference"/>
      </td>
    </tr>
  </xsl:if>
  </xsl:for-each>

  <xsl:for-each select="//article">
    <xsl:if test="item = 'Accessories'">
    <tr>
      <td>
          <xsl:value-of select="item"/>
      </td>
      <td>
          <xsl:value-of select="details"/>
      </td>
      <td>
          <xsl:value-of select="price"/>
      </td>
      <td>
          <xsl:value-of select="order"/>
      </td>
      <td>
          <xsl:value-of select="reference"/>
      </td>
    </tr>
  </xsl:if>
  </xsl:for-each>


    </table>
  </body>
  </html>
</xsl:template>
</xsl:stylesheet>