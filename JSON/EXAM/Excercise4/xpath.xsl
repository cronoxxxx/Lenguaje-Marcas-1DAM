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
      <xsl:variable name="tshirtCount" select="count(//article[item = 'T-shirt'])"/>
      <xsl:if test="$tshirtCount > 0">
        
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
    <tr>
      <th>Total of articles count</th>
      <th ><xsl:value-of select="$tshirtCount"/></th>
    </tr>
  </xsl:if>
   
    <xsl:variable name = "accesoriesCount" select = "count (//article[item = 'Accessories'])"/>
    <xsl:if test="$accesoriesCount > 0" >
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
    <tr>
      <th>Total of articles count</th>
      <th ><xsl:value-of select="$accesoriesCount"/></th>
    </tr>
  </xsl:if>
  <!--count(//article[item = 'T-shirt'])-->
 
    </table>
  </body>
  </html>
</xsl:template>
</xsl:stylesheet>