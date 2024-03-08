<?xml version="1.0"?>
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
            border: 3px solid white;
            
            text-align: left;
            
          }
          td{
            background-color :   rgb(43, 184, 43);
          }
          th{
            background-color : greenyellow;
          }
        </style>
      </head>
      <body>
        <h2>Food List</h2>
        <xsl:apply-templates/>
      </body>
    </html>
  </xsl:template>

  <xsl:template match="food_list">
    <table>
      <tr>
        <th>Food Item</th>
        <th>Carbs (g)</th>
        <th>Fiber (g)</th>
        <th>Fat (g)</th>
        <th>KJ (kj)</th>
      </tr>
      <xsl:apply-templates/>
    </table>
  </xsl:template>

  <xsl:template match="food_item">
    <tr>
      <td><xsl:value-of select="name"/></td>
      <td><xsl:value-of select="carbs_per_serving"/></td>
      <td><xsl:value-of select="fiber_per_serving"/></td>
      <td><xsl:value-of select="fat_per_serving"/></td>
      <td><xsl:value-of select="kj_per_serving"/></td>
    </tr>
  </xsl:template>
</xsl:stylesheet>
